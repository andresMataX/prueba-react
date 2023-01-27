interface Props {
  switchState: boolean
  handleToggle: () => void
}

export const Switch = ({ switchState, handleToggle }: Props) => {
  return (
    <>
      <input
        checked={switchState}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        style={{ backgroundColor: switchState ? '#75CEDB' : '' }}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  )
}
