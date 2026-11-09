export function Mark({className=''}:{className?:string}) {
  return <svg className={`brand-mark ${className}`} viewBox="0 0 48 38" fill="none" aria-hidden="true"><path d="M24 34V11M24 27C10 28 6 20 8 8C20 7 26 15 24 27ZM24 20C24 7 31 2 42 4C43 16 36 22 24 20ZM5 35H43" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
type DraftPathProps = import('react').SVGProps<SVGPathElement> & { d: string };

function DraftPath({ d, fill, strokeDasharray, ...props }: DraftPathProps) {
 // A compound SVG path starts multiple disconnected lines at once. Give each
 // pen stroke its own path, and keep the surface independent from its outline.
 if (strokeDasharray) return <path {...props} d={d} className="draft-guide" fill="none" strokeDasharray={strokeDasharray}/>;
 const segments = d.match(/[Mm][^Mm]*/g) ?? [d];
 return <>{fill && fill !== 'none' && <path {...props} d={d} fill={fill} stroke="none" className="draft-fill"/>}{segments.map((segment,i)=><path {...props} key={i} d={segment} fill="none" className="draft-stroke"/>)}</>;
}

export function GardenDrawing(){
 const trees=[{x:160,y:290,s:1},{x:390,y:190,s:1.15},{x:490,y:350,s:.85},{x:210,y:455,s:.65},{x:90,y:380,s:.7}];
 return <svg className="garden-drawing" viewBox="0 0 640 600" fill="none" preserveAspectRatio="xMidYMid meet" role="img" aria-label="An architectural garden is drawn from the ground up, then the view expands seamlessly to reveal surrounding landscaped homes">
  <defs><pattern id="hatch" width="7" height="7" patternTransform="rotate(30)" patternUnits="userSpaceOnUse"><path d="M0 0V7" stroke="#b7ae90" strokeWidth=".6"/></pattern></defs>
  <g className="garden-camera" stroke="#a89f85" strokeWidth="1.1" strokeLinejoin="round" strokeLinecap="round">
   <g className="garden-neighborhood" stroke="#b8ae94">
    <g className="neighbor-one" transform="translate(-170 30)">
     <DraftPath d="M22 201l83-48 78 45v84l-83 48-78-45z" fill="#eae1c9"/>
     <DraftPath d="M22 201l78 45 83-48M100 246v84M14 197l91-53 86 49-91 53zM39 225l45 26v47l-45-26zM116 252l47-27v41l-47 28z"/>
     <DraftPath d="M53 360v-20" stroke="#9fa57a"/><DraftPath d="M53 311C37 311 37 349 53 349C69 349 69 311 53 311Z" fill="#bdc394" stroke="#9fa57a"/>
    </g>
    <g className="neighbor-two" transform="translate(130 -20)">
     <DraftPath d="M440 137l100-58 83 48v89l-100 58-83-48z" fill="#eae1c9"/>
     <DraftPath d="M440 137l83 48 100-58M523 185v89M432 132l108-63 91 53-108 63zM459 169l44 25v45l-44-25zM542 190l56-32v41l-56 33z"/>
     <DraftPath d="M559 306v-20" stroke="#9fa57a"/><DraftPath d="M559 257C543 257 543 295 559 295C575 295 575 257 559 257Z" fill="#bdc394" stroke="#9fa57a"/>
    </g>
    <g className="neighbor-three" transform="translate(150 230)">
     <DraftPath d="M422 439l91-53 91 53v71l-91 53-91-53z" fill="#eae1c9"/>
     <DraftPath d="M422 439l91 53 91-53M513 492v71M414 435l99-57 99 57-99 57zM437 462l57 33v40l-57-33zM531 499l56-32v27l-56 32z"/>
     <DraftPath d="M409 565v-20M574 562v-20" stroke="#9fa57a"/><DraftPath d="M409 516C393 516 393 554 409 554C425 554 425 516 409 516ZM574 513C558 513 558 551 574 551C590 551 590 513 574 513Z" fill="#bdc394" stroke="#9fa57a"/>
    </g>
    <g className="garden-connections" stroke="#f47637" strokeWidth="1.5">
     <DraftPath d="M-70 367V405L60 480M658 260V322L577 369M481 488L560 534V608"/>
    </g>
   </g>
   <g className="garden-site">
    <g className="draw-foundation">
     <DraftPath d="M36 388L315 225L607 394L327 558Z" fill="#e5dcc3"/>
     <DraftPath d="M36 388V402L327 572L607 408V394M327 558V572"/>
     <DraftPath d="M81 389L315 253L562 395L328 532Z" strokeDasharray="3 5"/>
    </g>
    <g className="draw-hardscape">
     <DraftPath d="M118 408L335 282L360 296L143 423ZM251 485L452 369L479 385L279 501Z" fill="#f7efd9"/>
     <DraftPath d="M143 423L251 485M166 410L278 476M190 396L302 461M214 382L326 446M238 369L350 432"/>
     <DraftPath d="M340 437L393 406L460 444L407 475Z" fill="url(#hatch)"/>
     <DraftPath d="M70 386L123 356L175 386L122 417ZM440 460L494 429L549 398" stroke="#ff650b" strokeWidth="2"/>
    </g>
    <g className="draw-structure">
     <DraftPath d="M234 320V216L356 146L459 206V310L337 381Z" fill="#eee5cd"/>
     <DraftPath d="M234 216L337 277L459 206M337 277V381"/>
     <DraftPath d="M215 208L356 126L478 197L337 279Z" fill="#e8dfc7"/>
     <DraftPath d="M215 208V218L337 289L478 208V197M337 279V289"/>
    </g>
    <g className="draw-detail">
     <DraftPath d="M253 243L319 281V350L253 312ZM355 292L380 277V341L355 356ZM398 267L440 242V305L398 329Z" fill="#e1d7bb"/>
     <DraftPath d="M275 256V325M297 269V338M419 254V317M398 290L440 266"/>
     <DraftPath d="M246 332L337 385L468 310L487 321L337 408L225 343Z" fill="#f4ecd7"/>
    </g>
    <g className="draw-plants">{trees.map(({x,y,s},i)=><g key={i} transform={`translate(${x} ${y}) scale(${s})`}>
     <ellipse className="draft-fill" cx="0" cy="18" rx="27" ry="15" fill="#bdc193" fillOpacity=".3" stroke="none"/>
     <DraftPath d="M0 16V-72M0-30L-25-52M0-45L25-68M0-12L18-32" stroke="#8a8c65" strokeWidth="2"/>
     <DraftPath d="M-39-46C-69-72-40-103-20-95C-25-125 12-131 26-106C53-119 76-82 50-66C65-42 40-21 20-35C9-15-20-21-25-39C-30-33-40-37-39-46Z" fill="#d8d8ae" fillOpacity=".75" stroke="#9fa57a"/>
     <DraftPath d="M-39-46C-20-59-10-81-20-95M26-106C10-89 14-65 32-56" strokeOpacity=".5"/>
    </g>)}
    {[0,1,2,3,4,5,6].map(i=><g key={i} transform={`translate(${335+i*24} ${490-i*14})`}><DraftPath d="M0 0C-30-17-16-38 0-15C4-45 22-40 8-12C39-35 39-9 0 0Z" fill="#b8bf8a"/><DraftPath d="M0 0L1-18"/></g>)}
    </g>
    <g className="draw-water" stroke="#ff650b" strokeWidth="2"><DraftPath d="M48 419L324 580L620 409"/><DraftPath d="M587 358V313"/><circle className="draft-accent" cx="587" cy="307" r="4" fill="#ff650b"/></g>
    <g className="drawing-notes" stroke="none" fill="#706b59" fontFamily="monospace" fontSize="8"><text x="40" y="550">ANZ / LANDSCAPE STUDY 01</text><text x="510" y="555">1 : 100</text></g>
   </g>
  </g>
 </svg>;
}
export function Ecosystem(){return <svg viewBox="0 0 800 430" fill="none" className="ecosystem" role="img" aria-label="Interconnected garden ecosystems illustrated with flowing botanical paths">
 <g strokeWidth="1.2"><ellipse cx="315" cy="240" rx="115" ry="130" stroke="#cfc4ad" transform="rotate(-35 315 240)"/><ellipse cx="461" cy="242" rx="135" ry="145" stroke="#cfc4ad" transform="rotate(26 461 242)"/>
 <path className="eco-path" d="M245 250C200 130 390 170 400 35C380 220 593 168 559 310" stroke="#ff6627"/><path className="eco-path" d="M223 200C320 330 356 99 489 153C620 207 341 249 407 394" stroke="#aa85d9"/><path className="eco-path" d="M186 324C370 370 321 77 429 130C558 190 380 355 590 290" stroke="#adbb65"/>
 {Array.from({length:28},(_,i)=>{const x=150+((i*97)%510),y=90+((i*67)%290);return <g key={i} transform={`translate(${x} ${y})`} stroke="#a59c87"><path d="M-3 0H3M0-3V3"/><circle r="1.5" fill="#a59c87"/></g>;})}</g>
 <circle r="4" fill="#ff6627"><animateMotion dur="9s" repeatCount="indefinite" path="M245 250C200 130 390 170 400 35C380 220 593 168 559 310"/></circle><circle r="3" fill="#aa85d9"><animateMotion dur="12s" repeatCount="indefinite" path="M223 200C320 330 356 99 489 153C620 207 341 249 407 394"/></circle>
 </svg>}
