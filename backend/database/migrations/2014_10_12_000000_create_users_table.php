<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id')->unique();
            $table->string('first_name')->default('First Name');
            $table->string('last_name')->default('Last Name');
            $table->string('student_no')->unique();
            $table->string('email')->unique();
            $table->string('password')->nullable();
            $table->boolean('is_activated')->default(0);

            $table->integer('faculty_id')->unsigned()->nullable();
            $table->foreign('faculty_id')->references('id')->on('faculties');

            $table->integer('scholership_id')->unsigned()->nullable();
            $table->foreign('scholership_id')->references('id')->on('scholerships');

            $table->integer('entrance_year')->unsigned()->default(date("Y"));
            $table->string('profile_summary')->default('Add your profile summary here.');
            $table->string('nic')->nullable();
            $table->boolean('scholership_status')->nullable();
            $table->boolean('apply_again_status')->default(1);

            $table->rememberToken();          
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
        Schema::dropIfExists('users');
    }
}
