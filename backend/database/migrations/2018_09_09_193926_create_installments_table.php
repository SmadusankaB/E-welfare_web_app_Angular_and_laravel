<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInstallmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('installments', function (Blueprint $table) {
            $table->increments('id')->unique();

            $table->integer('user_id')->unsigned()->nullable();
            $table->foreign('user_id')->references('id')->on('users');

            $table->integer('period_id')->unsigned()->nullable();
            $table->foreign('period_id')->references('id')->on('periods')->onDelete('cascade');

            $table->string('signature')->nullable();

            // payment added beacuse, to kepp records of every user who cchanged their scholrschip
            // check the scholarship type and update
            $table->double('payment', 8, 2)->nullable();

            
            // schol_type added beacuse, to kepp records of every user who cchanged their scholrschip
            // Update schol_type as scholarship name in scholership table
            $table->string('scholership_type_id')->nullable();

            $table->integer('number_of_attempts')->nullable();

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
        Schema::dropIfExists('installments');
    }
}
