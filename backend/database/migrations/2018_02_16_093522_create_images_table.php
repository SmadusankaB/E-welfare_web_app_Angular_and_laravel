<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('images', function (Blueprint $table) {
            $table->increments('id')->unique();
            
            $table->string('real_name')->nullable();
            $table->string('new_name')->nullable();
            $table->string('saved_path')->nullable();
            $table->string('extension')->nullable();;
            $table->string('uploaded_date')->nullable();
            $table->string('uploaded_time')->nullable();

            // delete every images when delete related user using onDelete()
            $table->integer('user_id')->unsigned()->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

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
        Schema::dropIfExists('images');
    }
}
