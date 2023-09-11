import Image from 'next/image'

export const Logo = () => {
  return(
    <Image src="/logo.svg" width={36} height={36} style={{width: 'auto', height: 'auto'}} alt="" />
  )
}
