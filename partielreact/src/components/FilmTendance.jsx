import React, { useEffect, useState } from "react";


function FilmTendance(){
   
    return (
        <div class="wrapper">
        <div class="tendances-container container">
          <div class="title-filter" id="title-tendances">
            <h2>Tendances</h2>
            <button class="active" id="day">Aujourd'hui</button>
            <button id="week">Cette semaine</button>
          </div>
          <div class="grid-tendances" id="tendances"></div>
        </div>
      </div>
    )
}

export default FilmTendance;