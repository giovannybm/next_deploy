"use client";

import Image from "next/image";
import { Button, Typography, Grid, Toolbar, Box } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";
import { useLangStore } from '@/store/langStore'
import { useRouter } from "next/navigation";

export default function Signin({ params }: any) {

 const router = useRouter()

 const language = useLangStore((state: any) => state.lang)
 const { t } = useTranslation(language, `${params.tenant}-general`)

 return (
  <>
   <Grid container>
    <Grid item >
     <Toolbar className="toolbar-table">
      <Typography component="div" className="bold" color="primary" variant="h5">
       <Image
        src={`/images/${params.tenant}/img-logo-color.svg`}
        width={100}
        height={100}
        // fill={true}
        alt="Picture of the author"
        priority
       />
      </Typography>
     </Toolbar>
    </Grid>
   </Grid>

   <Box
    sx={{
     alignItems: 'center',
     display: 'flex',
     justifyContent: 'center',
    }}
   >
    <Box
     sx={{
      alignItems: 'center',
      alignContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      padding: '32px',
      width: '520px',
     }}
    >

     <Button onClick={() => router.push(`/${params.tenant}/dashboard`) } type="submit" fullWidth size="large" variant="contained">
      {t('buttons.accept')}
     </Button>
    </Box>
   </Box>
  </>

 );
}
