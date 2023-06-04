import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, updateNote } from "./";
import { loadNotes } from "../../helpers";

export const startNewNote = () => {
    return async(dispatch, getState) => {
        //en el getState tengo todo tos estados que estan en el redux, auth, journal, etc.
        console.log(getState())

        //todo: tarea dispatch
        dispatch( savingNewNote() );
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notas` ));
        const setDocResp = await setDoc ( newDoc, newNote )

        newNote.id = newDoc.id;

        dispatch( addNewEmptyNote( newNote ));
        dispatch( setActiveNote( newNote ));
        
    }
}

export const startLoadingNotes = () => {

    return async(dispatch, getState) => {
        const { uid } = getState().auth;
        if(!uid) throw new Error('El UID del usuario no existe');

        const notes = await loadNotes( uid );
        dispatch( setNotes(notes))
    }
}

export const startSaveNote = () => {
    return async( dispatch, getState ) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        const docRef = doc( FirebaseDB, `${uid}/journal/notas/${ note.id }` );
        await setDoc( docRef, noteToFireStore, { merge: true });

        dispatch( updateNote( note ) );


    }
}