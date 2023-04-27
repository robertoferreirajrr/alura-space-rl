import React from 'react'
import Item from '../Item';


export default function Cards({itens, styles}) {
  return (
    <ul className={styles.galeria__cards}>
        {itens.map((item) => {
          return (
            <Item key={item.id} item={item} styles={styles}/>
          );
        })}
      </ul>
  )
}
