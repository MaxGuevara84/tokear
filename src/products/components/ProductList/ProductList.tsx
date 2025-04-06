import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { ProductCard } from "../..";
import { ICertificate } from "../../../interface/Certificate";
import style from "./ProductList.module.css";

interface CertificatesProps {
  list: ICertificate[] | undefined;
}

export const ProductList = ({ list }: CertificatesProps) => {
  // const [estadoModal, setEstadoModal] = useState(false);

  const [open, setOpen] = useState(false);
  const [imagen, setImagen] = useState("");

  const handleClickOpen = (item: ICertificate) => {
    console.log('ACA ESTA EL CERTIFICADO => ', item);
    
    setImagen(item.imageUrl);

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 justify-center max-w-max">
        {list?.map((item) => (
          <ProductCard
            key={item.id}
            certificate={item}
            onClick={handleClickOpen}
          />
        ))}
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={style.fondo}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <img src={imagen} alt="img.png" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Exit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
