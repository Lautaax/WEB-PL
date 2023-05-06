import React from 'react';
import "./Presentacion.css"
import JavierMilei from "../Images/JavierMilei.webp"

export const Presentacion = () => {
  return (
    <div className="text-white ">
    <div className="row datos fondoPres ">
        <div className="col-md-8">
            <div className="pb-3">
                <h1>Quien es Javier Milei?</h1>
            </div>
            <div className="row separacion">
                <div className="col-md-6   ">
                    <p>Javier Milei, el reconocido economista liberal argentino, ha
                    presentado su plan para llevar a cabo una verdadera transformación
                    económica en el país. Su enfoque se centra en acabar con el
                    socialismo que ha gobernado el país durante décadas, levantar la
                    economía, dolarizar y terminar con los planes sociales y la deuda
                    pública.</p>
                </div>
                
                <div className="col-md-6 separacion"><p>Javier Milei, el reconocido economista liberal argentino, ha
                    presentado su plan para llevar a cabo una verdadera transformación
                    económica en el país. Su enfoque se centra en acabar con el
                    socialismo que ha gobernado el país durante décadas, levantar la
                    economía, dolarizar y terminar con los planes sociales y la deuda
                    pública.</p>

                </div>

                <div className="col-md-6 separacion">
                    <p>El primer paso de Milei sería abolir las políticas socialistas y
                    estatistas que han mantenido al país en la pobreza y el
                    estancamiento económico. Para lograrlo, promovería la reducción
                    del tamaño del Estado y la eliminación de regulaciones y trabas
                    burocráticas que ahogan la iniciativa privada y limitan el
                    crecimiento.</p>

                </div>

                <div className="col-md-6 separacion">
                    <p>Además, Milei propone dolarizar la economía, lo que significaría
                    adoptar el dólar estadounidense como moneda oficial. Esto ayudaría
                    a estabilizar la economía y reducir la inflación, al mismo tiempo
                    que aumentaría la confianza en la moneda y atraería inversores
                    internacionales.</p>

                </div>

                <div className="col-md-6 separacion">
                    <p>Por último, Milei aborda el tema de los planes sociales y la deuda
                    pública. Propone terminar con los programas asistenciales que
                    perpetúan la dependencia del Estado y fomentan la falta de
                    productividad. En su lugar, promovería políticas que incentiven la
                    creación de empleo y la iniciativa privada. En cuanto a la deuda
                    pública, Milei propone renegociarla y reestructurarla de manera
                    sostenible para evitar un default que haga colapsar la economía.</p>
                    
                </div>
                <div className="col-md-6 separacion">
                    <p>Javier Milei está convencido de que su plan es la única manera de
                    sacar al país de la pobreza y el subdesarrollo. Su enfoque en la
                    libertad económica y la iniciativa privada es un camino probado
                    hacia el éxito en otras partes del mundo. Si Argentina quiere
                    alcanzar un futuro próspero, debe seguir el camino que Milei
                    propone.</p>
                    
                </div>
            </div>
        </div>
        <div class="col-md-4 separacion">
            <img alt="..." className="logojm" src={JavierMilei} />
        </div>
    </div>
</div>
  )
}
