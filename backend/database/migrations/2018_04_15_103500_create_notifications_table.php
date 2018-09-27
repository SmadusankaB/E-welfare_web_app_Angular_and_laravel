<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNotificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->increments('id')->unique();

            // Delete all notification when delete related user
            $table->integer('user_id')->unsigned()->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            $table->integer('notification_type_id')->unsigned()->nullable();
            $table->foreign('notification_type_id')->references('id')->on('notification_types');

            $table->string('date')->nullable();
            $table->string('time')->nullable();
            $table->string('notification_title')->nullable();
            $table->string('notification_body')->nullable();
            $table->boolean('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notifications');
    }
}
