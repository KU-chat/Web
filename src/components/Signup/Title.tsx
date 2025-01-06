interface TitleProps {
  title: string
}

const Title = ({ title }: TitleProps) => {
  return <div className='border-2'>{title}</div>
}

export default Title
