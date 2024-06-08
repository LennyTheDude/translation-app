interface ButtonRowProps {
    buttons: any[];
    tab: string;
    setTab: Function;
}

function ButtonRow({ buttons, tab, setTab }: ButtonRowProps) {

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
  