<?php

namespace Database\Seeders;

use App\Models\Buku;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        Buku::create([
            "judul" => "Filosofi Teras",
            "penulis" => "Henry Manampiring",
            "tahun_terbit" => 2018
        ]);
    }
}
