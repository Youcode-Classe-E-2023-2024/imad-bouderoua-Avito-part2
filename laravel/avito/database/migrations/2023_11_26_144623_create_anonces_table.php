<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnoncesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('anonces', function (Blueprint $table) {
            $table->id();
            $table->string('product_name');
            $table->string('product_price');
            $table->text('description');
            $table->string('product_photo')->nullable();
            $table->string('city');
            $table->string('productowner');
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
        Schema::dropIfExists('anonces');
    }
}

