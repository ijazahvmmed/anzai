import { useEffect, useRef } from 'react';

export default function Silk({ purple = false, className = '' }: {purple?: boolean; className?: string}) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current!;
    const gl = canvas.getContext('webgl', { alpha: false, antialias: false, powerPreference: 'low-power' });
    if (!gl) return;
    const shader = (type: number, source: string) => {
      const s = gl.createShader(type)!; gl.shaderSource(s, source); gl.compileShader(s); return s;
    };
    const vertex = shader(gl.VERTEX_SHADER, 'attribute vec2 a; varying vec2 uv; void main(){uv=a*.5+.5;gl_Position=vec4(a,0.,1.);}');
    const fragment = shader(gl.FRAGMENT_SHADER, `precision mediump float;
      varying vec2 uv; uniform float t; uniform vec3 color;
      void main(){
        vec2 p=uv; float phase=p.x*13.+p.y*5.5+sin(p.y*4.+t*.19)*1.5+t*.13;
        float fold=sin(phase)+.36*sin(phase*2.+.5)+.12*sin(phase*3.);
        float light=.72+.20*fold+.14*p.y;
        float fine=fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453)*.013;
        vec3 shaded=color*light;
        if(color.r>.9){shaded=vec3(1.,.08+.28*light,.008);}
        gl_FragColor=vec4(shaded+fine,1.);
      }`);
    const program = gl.createProgram()!; gl.attachShader(program, vertex); gl.attachShader(program, fragment); gl.linkProgram(program); gl.useProgram(program);
    const buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);
    const a = gl.getAttribLocation(program, 'a'); gl.enableVertexAttribArray(a); gl.vertexAttribPointer(a,2,gl.FLOAT,false,0,0);
    const time=gl.getUniformLocation(program,'t'); const color=gl.getUniformLocation(program,'color');
    gl.uniform3f(color,...(purple ? [0.57,0.24,1] : [1,0.30,0.015]) as [number,number,number]);
    let active = true, frame = 0, previous = 0;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const resize = () => {canvas.width=Math.min(canvas.clientWidth,1000);canvas.height=Math.min(canvas.clientHeight,1000);gl.viewport(0,0,canvas.width,canvas.height);};
    const observer=new ResizeObserver(resize);observer.observe(canvas);resize();
    const visible=new IntersectionObserver(([entry])=>{active=entry.isIntersecting;});visible.observe(canvas);
    const draw=(now:number)=>{frame=requestAnimationFrame(draw);if(!active || now-previous<33)return;previous=now;gl.uniform1f(time,reduced?0:now*.001);gl.drawArrays(gl.TRIANGLES,0,6);};
    frame=requestAnimationFrame(draw);
    return()=>{cancelAnimationFrame(frame);observer.disconnect();visible.disconnect();gl.deleteProgram(program);gl.deleteShader(vertex);gl.deleteShader(fragment);gl.deleteBuffer(buffer);};
  },[purple]);
  return <canvas ref={ref} className={`silk ${purple?'purple':''} ${className}`} aria-hidden="true"/>;
}
