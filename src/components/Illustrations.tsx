export function Mark({className=''}:{className?:string}) {
  return <svg className={`brand-mark ${className}`} viewBox="0 0 48 38" fill="none" aria-hidden="true"><path d="M24 34V11M24 27C10 28 6 20 8 8C20 7 26 15 24 27ZM24 20C24 7 31 2 42 4C43 16 36 22 24 20ZM5 35H43" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
export function GardenDrawing(){
 const trees=[{x:160,y:290,s:1},{x:390,y:190,s:1.15},{x:490,y:350,s:.85},{x:210,y:455,s:.65},{x:90,y:380,s:.7}];
 return <svg className="garden-drawing" viewBox="0 0 640 600" fill="none" role="img" aria-label="Animated architectural drawing of a landscaped garden, with a home, trees, planted beds and stone pathways">
  <defs><pattern id="hatch" width="7" height="7" patternTransform="rotate(30)" patternUnits="userSpaceOnUse"><path d="M0 0V7" stroke="#b7ae90" strokeWidth=".6"/></pattern></defs>
  <g stroke="#a89f85" strokeWidth="1.1" strokeLinejoin="round">
   <g className="draw-base"><path d="M36 388L315 225L607 394L327 558Z" fill="#e5dcc3"/><path d="M36 388V402L327 572L607 408V394M327 558V572"/>
   <path d="M81 389L315 253L562 395L328 532Z" strokeDasharray="3 5"/>
   <path d="M118 408L335 282L360 296L143 423ZM251 485L452 369L479 385L279 501Z" fill="#f7efd9"/>
   <path d="M143 423L251 485M166 410L278 476M190 396L302 461M214 382L326 446M238 369L350 432"/>
   <path d="M340 437L393 406L460 444L407 475Z" fill="url(#hatch)"/>
   <path d="M70 386L123 356L175 386L122 417ZM440 460L494 429L549 398" stroke="#ff650b" strokeWidth="2"/>
   </g>
   <g className="draw-house"><path d="M234 320V216L356 146L459 206V310L337 381Z" fill="#eee5cd"/><path d="M234 216L337 277L459 206M337 277V381M234 216L356 146L459 206"/>
   <path d="M215 208L356 126L478 197L337 279Z" fill="#e8dfc7"/><path d="M215 208V218L337 289L478 208V197M337 279V289"/>
   <path d="M253 243L319 281V350L253 312ZM355 292L380 277V341L355 356ZM398 267L440 242V305L398 329Z" fill="#e1d7bb"/>
   <path d="M275 256V325M297 269V338M419 254V317M398 290L440 266"/>
   <path d="M246 332L337 385L468 310L487 321L337 408L225 343Z" fill="#f4ecd7"/>
   </g>
   <g className="draw-plants">{trees.map(({x,y,s},i)=><g key={i} transform={`translate(${x} ${y}) scale(${s})`}><path d="M0 16V-72M0-30L-25-52M0-45L25-68M0-12L18-32" stroke="#8a8c65" strokeWidth="2"/><path d="M-39-46C-69-72-40-103-20-95C-25-125 12-131 26-106C53-119 76-82 50-66C65-42 40-21 20-35C9-15-20-21-25-39C-30-33-40-37-39-46Z" fill="#d8d8ae" fillOpacity=".75" stroke="#9fa57a"/><path d="M-39-46C-20-59-10-81-20-95M26-106C10-89 14-65 32-56" strokeOpacity=".5"/><ellipse cx="0" cy="18" rx="27" ry="15" fill="#bdc193" fillOpacity=".3" stroke="none"/></g>)}
   {[0,1,2,3,4,5,6].map(i=><g key={i} transform={`translate(${335+i*24} ${490-i*14})`}><path d="M0 0C-30-17-16-38 0-15C4-45 22-40 8-12C39-35 39-9 0 0Z" fill="#b8bf8a"/><path d="M0 0L1-18"/></g>)}
   </g>
   <g className="draw-water" stroke="#ff650b" strokeWidth="2"><path d="M48 419L324 580L620 409"/><path d="M587 358V313"/><circle cx="587" cy="307" r="4" fill="#ff650b"/></g>
  </g>
  <g fill="#706b59" fontFamily="monospace" fontSize="8"><text x="40" y="550">EVERFIELD / LANDSCAPE STUDY 01</text><text x="510" y="555">1 : 100</text></g>
 </svg>;
}
export function Ecosystem(){return <svg viewBox="0 0 800 430" fill="none" className="ecosystem" role="img" aria-label="Interconnected garden ecosystems illustrated with flowing botanical paths">
 <g strokeWidth="1.2"><ellipse cx="315" cy="240" rx="115" ry="130" stroke="#cfc4ad" transform="rotate(-35 315 240)"/><ellipse cx="461" cy="242" rx="135" ry="145" stroke="#cfc4ad" transform="rotate(26 461 242)"/>
 <path className="eco-path" d="M245 250C200 130 390 170 400 35C380 220 593 168 559 310" stroke="#ff6627"/><path className="eco-path" d="M223 200C320 330 356 99 489 153C620 207 341 249 407 394" stroke="#aa85d9"/><path className="eco-path" d="M186 324C370 370 321 77 429 130C558 190 380 355 590 290" stroke="#adbb65"/>
 {Array.from({length:28},(_,i)=>{const x=150+((i*97)%510),y=90+((i*67)%290);return <g key={i} transform={`translate(${x} ${y})`} stroke="#a59c87"><path d="M-3 0H3M0-3V3"/><circle r="1.5" fill="#a59c87"/></g>;})}</g>
 <circle r="4" fill="#ff6627"><animateMotion dur="9s" repeatCount="indefinite" path="M245 250C200 130 390 170 400 35C380 220 593 168 559 310"/></circle><circle r="3" fill="#aa85d9"><animateMotion dur="12s" repeatCount="indefinite" path="M223 200C320 330 356 99 489 153C620 207 341 249 407 394"/></circle>
 </svg>}
