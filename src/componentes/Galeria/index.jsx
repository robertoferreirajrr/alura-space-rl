import React, { useState } from "react";
import Tags from "../Tags";
import styles from "./Galeria.module.scss";
import fotos from "./fotos.json";

import Cards from "./Cards";

export default function Galeria() {

  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map(foto => foto.tag))]

  const filtraFotos = (tag) => {
    const novasFotos = fotos.filter(foto => {
      return foto.tag === tag;
    })
    setItens(novasFotos)
  }

  const exibirTodas = () => {
    setItens(fotos)
  }

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} exibirTodas={exibirTodas} filtraFotos={filtraFotos}/>
      <Cards itens={itens} styles={styles}/>
    </section>
  );
}
