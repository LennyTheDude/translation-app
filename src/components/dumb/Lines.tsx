interface LinesProps {
    lines: string[];
    editable: boolean;
    tag: string;
    hoveredLine: number | null;
    setHoveredLine: Function;
    activeLine?: number | null;
    setActiveLine?: Function;
    updateText?: Function;
}

function Lines({ lines, editable, tag, hoveredLine, setHoveredLine, activeLine, setActiveLine, updateText }: LinesProps) {

    return (
      <div id={tag} className="text-wrapper">
        {lines.map((line, index) => {
          return (
            <div
              key={`original-line-${index}`}
              contentEditable={editable}
              suppressContentEditableWarning={true}
              className={`${hoveredLine == index && 'hoveredLine'} ${activeLine == index && 'activeLine'}`}
              onMouseEnter={() => setHoveredLine(index)}
              onMouseLeave={() => setHoveredLine(null)}
              onFocus={setActiveLine && (() => setActiveLine(index))}
              onInput={(e) => updateText && updateText(e, index)}
            >{line}</div>
          )
        })}
      </div>
    )
  }
  
  export default Lines
  