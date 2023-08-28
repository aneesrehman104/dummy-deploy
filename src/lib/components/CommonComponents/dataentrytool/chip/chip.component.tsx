import { Chip } from '@mui/material'
import React from 'react'

export const ChipTag: React.FC<{ label: string; color: string; background_color: string; hover_bg: string; border: boolean }> = ({ label, color, background_color, hover_bg, border }) => {
  return (
    <Chip
        label={ label }
        variant='outlined'
        sx={{
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: hover_bg,
                borderColor: '#e8e8e8',
            },
            transition: 'all 0.2s ease-in-out',
            border: border ? "" : "none" ,
            backgroundColor: background_color,
            color
        }}
    />
  )
}