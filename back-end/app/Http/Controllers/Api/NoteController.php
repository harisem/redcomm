<?php

namespace App\Http\Controllers\Api;

use App\Models\Note;
use App\Http\Controllers\Controller;
use App\Http\Resources\NoteResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class NoteController extends Controller
{
    public function index(Request $request)
    {
        $page = $request->query('size', 10);
        $notes = Note::latest()->simplePaginate($page);

        return new NoteResource(true, 'Fetched Successfully.', $notes);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'tag' => 'required',
            'title' => 'required',
            'note' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $note = Note::create([
            'tag' => $request->tag,
            'title' => Str::title($request->title),
            'note' => $request->note,
        ]);

        return new NoteResource(true, 'Data has been saved.', $note);
    }

    public function show($id)
    {
        $note = Note::findOrFail($id);
        return new NoteResource(true, 'Success', $note);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'tag' => 'required',
            'title' => 'required',
            'note' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $note = Note::findOrFail($id);

        $note->update([
            'tag' => $request->tag,
            'title' => $request->title,
            'note' => $request->note,
        ]);

        return new NoteResource(true, 'Updated Successfully.', $note);
    }

    public function destroy($id)
    {
        $note = Note::findOrFail($id);
        $note->delete();

        return new NoteResource(true, 'Note has been deleted.', null);
    }
}
