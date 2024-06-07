function ButtonRow({ buttons, tab, setTab }) {

  return (
    <div className="tab-selector">
      {buttons.map((button) => {
        return(
          <div
            key={`${button}-${button.id}`}
            className={`tab-button ${(tab == button.id) && 'tab-button-active'}`}
            onClick={() => setTab(button.id)}
          >{button.text}</div>
        )
      })}
    </div>
  )
}

export default ButtonRow
