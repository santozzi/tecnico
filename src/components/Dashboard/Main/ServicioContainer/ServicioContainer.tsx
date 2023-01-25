import Box from "@mui/material/Box/Box";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { MenuItem, Stack, Button } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import ClienteContainer from "../ClienteContainer/ClienteContainer";
import ArticuloContainer from "../ArticuloContainer/ArticuloContainer";
import Filters from "../../../../utils/Filters/Filters";
import ArticuloServicio from "../ArticuloContainer/ArticuloServicio/ArticuloServicio";
import { IArticulo } from "../../../../models/interfaces/articulo";
import { findAll } from "../../../../models/prueba/articulo.model";
import Problema from "./Problema/Problema";
import { IProblema } from "../../../../models/interfaces/servicio";
import { Modal } from "../../../../utils/Modal";
export interface ServicioContainerInterface { }

const visibles: boolean[] = [false, false]
const ServicioContainer: React.FC<ServicioContainerInterface> = () => {
  const [estado, setEstado] = useState(true);
  const [articulo, setArticulo] = useState<IArticulo>({ tipo: "" });
  const [articulos, setArticulos] = useState<IArticulo[]>([]);
  const [isVisibles, setIsVisibles] = useState<boolean[]>(visibles);
  const [fechaIngreso, setFechaIngreso] = useState<string>("");
  const [fechaEstimada, setFechaEstimada] = useState<string>("");

  const [problemas, setProblemas] = useState<IProblema[]>([]);
  const [problemasSeleccionados, setProblemasSeleccionados] = useState<IProblema[]>([]);
  const [isModalArticulo, setIsModalArticulo] = useState(false);
  const [isModalProblema, setIsModalProblema] = useState(false);

  const manejadorDeArticulos = (articulos: IArticulo[]) => {
    setArticulos(articulos);
  }
  const manejadorDeProblemas = (problemas: IProblema[]) => {
         setProblemas(problemas);
  }




  const problemaSeleccionado = (problema: IProblema) => {
    setProblemasSeleccionados(p => [...p, problema]);
  }
  const agregarArticulo = (articulo: IArticulo) => {
    setArticulo(articulo);
    modalArticulos();
  }
  const deleteProblem = (problema: IProblema) => {
    problema.estado = true;
    console.log(problemas);
    setProblemas(p => [...p])

  }
  const modalArticulos = () => {
    setIsModalArticulo(m => !m);
  }
  const modalProblemas = () => {
    setIsModalProblema(m => !m);
  }

  const dayNow = (): string => {
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    let dayS = "" + day;
    let monthS = "" + month;



    if (day < 10) {
      dayS = `0${day}`;
    }
    if (month < 10) {
      monthS = `0${month}`;
    }

    return `${year}-${monthS}-${dayS}`
  }

  useEffect(() => {
    console.log(dayNow());

    findAll().then(articulos => {
      setArticulos(articulos);
    })
    if (estado) {
      setProblemas([{ nombre: "Calienta", estado: true }, { nombre: "No enciende", estado: true }, { nombre: "Se reinicia", estado: true }, { nombre: "Disco rigido hace ruido", estado: true }]);
      setEstado(false);
    }
    console.log(fechaEstimada, " ", fechaIngreso);

  }, [fechaEstimada, fechaIngreso])

  return (
    <Box sx={{
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
    }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box sx={{ paddingTop: "1rem" }}>N° de Orden: 001225</Box>
        <Stack component="form" noValidate spacing={2}>
          <TextField
            id="date"
            label="Ingreso"
            type="date"
            defaultValue={dayNow()}
            onChange={(e) => setFechaIngreso(e.target.value)}
            size="small"
            sx={{ width: 210 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="date"
            label="Entrega estimada"
            type="date"
            defaultValue={dayNow()}
            size="small"
            sx={{ width: 210 }}
            onChange={(e) => setFechaEstimada(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Stack>
        <Button onClick={() => modalArticulos()}>
          {(articulo.tipo === "")
            ? <Box>Ingrese articulo</Box>
            : <Box>{`${articulo.tipo} ${articulo.marca} ${articulo.modelo} `}</Box>
          }
        </Button>

        <TextField
          id="outlined-select-currency"
          label="Prioridad"
          variant="outlined"
          size="small"
          select
          sx={{ width: 210 }}
        >
          {["Baja", "Media", "Alta"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #C4C4C4",

              width: 210,
              height: 30,
              backgroundColor: "#848484",
            }}
          >

            <Box sx={{ color: "white", marginLeft: '1rem' }}>Problema</Box>
            <Box
              component='button'
              onClick={() => { modalProblemas() }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "green",
                borderRadius: "20px",
                color: 'white',
                width: '20px',
                height: '20px',
                "&:hover": {
                  backgroundColor: "white",
                  color: 'black'
                },
                "&:active": {
                  color: 'green',
                  translate: '1px 1px'
                },
                marginRight: '1rem'
              }}
            >
              <ControlPointIcon />
            </Box>
          </Box>
          <Box

            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              border: "1px solid #C4C4C4",
              width: 210,

            }}
          >
            {
              problemas.map((problema: IProblema, index) => problema.estado === false && <Box component={Button} onClick={() => deleteProblem(problema)}>{problema.nombre}</Box>)
            }

          </Box>
        </Box>
      </Box>
      <Box>
        <Modal onClose={modalArticulos} open={isModalArticulo}>
          <ArticuloServicio articulos={articulos} manejadorDeArticulos={manejadorDeArticulos} articuloFunction={agregarArticulo} />
        </Modal>
        <Modal onClose={modalProblemas} open={isModalProblema}>
          <Problema
            problemas={problemas}
            problemaSeleccionado={problemaSeleccionado}
            manejadorDeProblemas={manejadorDeProblemas}
          />
        </Modal>

      </Box>

    </Box>
  );
};

export default ServicioContainer;
