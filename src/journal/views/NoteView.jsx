import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGalery } from "../components"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo } from "react"
import { setActiveNote, startSaveNote } from "../../store/journal"
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active:note, messageSaved, isSaving } = useSelector(state => state.journal)
    const { body, title, onInputChange, formState, date } = useForm(note);

    const dateStrng = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    },[date])

    useEffect(() => {
      dispatch( setActiveNote(formState));
    }, [formState])
    
    const onSaveNote = () => {
        dispatch( startSaveNote() );
    }

    useEffect(() => {
        if( messageSaved.length > 0){
            Swal.fire('Nota actualizada', messageSaved, 'success');
        }
    }, [messageSaved]);
    

    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1}}>
            <Grid item>
                <Typography fontSize={ 39 } fontWeight='light'> { dateStrng } </Typography>
            </Grid>
            <Grid item>
                <Button 
                    color="primary" 
                    sx={{ padding: 2}}
                    onClick={ onSaveNote }
                    disabled={ isSaving }
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1}}/>
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un titulo"
                    label="Titulo"
                    sx={{ border: 'none', mb: 1}}
                    name="title"
                    value={title}
                    onChange={ onInputChange }

                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Que sucedio el dia de hoy?"
                    minRows={ 5 }
                    name="body"
                    value={body}
                    onChange={ onInputChange }
                />  
            </Grid>

            {/* Galeria de imagenes */}
            <ImageGalery/>
        </Grid>
    )
}
