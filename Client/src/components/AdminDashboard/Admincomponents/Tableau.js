import { reference } from '@popperjs/core';
import React, { useRef, useEffect } from 'react';
// var viz;

// const TableauD = () => {
//     const ref = useRef(null);
//     const url = "https://public.tableau.com/views/MarketingCohortsAnalysis";

//     const initViz = () =>{
//         viz.dispose()

//         viz = new tableau.Viz(ref.current, url, {
//             width: "100%",
//             height: "90vh",
//         })
//     }

//     useEffect(() =>{
//         initViz()
//     }, [])

//     return(
//         // <div>
//             <div ref={ref}/> 
//         // </div>
//     )
// };

// export default TableauD;
var tableau = require('tableau-api');

const TableauEmbed = ({ url }) => {
  const vizContainer = useRef(null);

  useEffect(() => {
    const initViz = () => {
      new tableau.Viz(vizContainer.current, url, {
        // Add options here if needed
      });
    };

    initViz();

    // Cleanup function
    return () => {
      // Code to cleanup Tableau viz
    };
  }, [url]);

  return <div ref={vizContainer} />;
};

export default TableauEmbed;