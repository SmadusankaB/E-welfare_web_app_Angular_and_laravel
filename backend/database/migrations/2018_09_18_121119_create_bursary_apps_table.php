<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBursaryAppsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bursary_apps', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->string('distance')->default('Distance');
            $table->string('address')->default('Address');
            $table->string('phone_no')->default('Phone no');

            // $table->boolean('apply_again_status')->default(1);
        

            $table->string('real_name')->nullable();
            $table->string('new_name')->nullable();
            $table->string('saved_path')->nullable();
            $table->string('extension')->nullable();;
            $table->string('uploaded_date')->nullable();
            $table->string('uploaded_time')->nullable();

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
        Schema::dropIfExists('bursary_apps');
    }
}
