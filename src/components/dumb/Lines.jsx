function Lines({ lines, editable, tag, hoveredLine, setHoveredLine, activeLine, setActiveLine }) {

  return (
    <div name={tag} id={tag} className="text-wrapper">
      {lines.map((line, index) => {
        return (
          <div
            key={`original-line-${index}`}
            contentEditable={editable}
            suppressContentEditableWarning={true}
            className={`${hoveredLine == index && 'hoveredLine'} ${activeLine == index && 'activeLine'}`}
            onMouseEnter={() => setHoveredLine(index)}
            onMouseLeave={() => setHoveredLine(null)}
            onFocus={() => setActiveLine(index)}
          >{line}</div>
        )
      })}
    </div>
  )
}

export default Lines
