interface Props {
  text: string
}

export const MultiLineText = ({text}: Props) => {

  const words = text.split('\n');
  return words.map((word: string) => (
    <>
      {word}<br/>
    </>
  ))
}