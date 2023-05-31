import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { IconButton, Typography } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal"


export const JournalPage = () => {

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch( startNewNote() )
  }

  const { isSaving, active } = useSelector( state => state.journal);

  return (
    <JournalLayout>

      {
        // lo transformamos en bolleano
        (!!active)
        ? 
        <NoteView/>
        :
        <NothingSelectedView/>
      }

      <IconButton
        disabled={ isSaving }
        onClick={ onClickNewNote }
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor:'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }}/>
      </IconButton>
    </JournalLayout>
    
  )
}
