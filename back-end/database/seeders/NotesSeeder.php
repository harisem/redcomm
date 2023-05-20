<?php

namespace Database\Seeders;

use App\Models\Note;
use File;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NotesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Note::truncate();
        $json = File::get("database/data/notes.json");
        $notes = json_decode($json);

        foreach ($notes as $key => $note) {
            Note::create([
                "tag" => $note->tag,
                "title" => $note->title,
                "note" => $note->note,
            ]);
        }
    }
}
