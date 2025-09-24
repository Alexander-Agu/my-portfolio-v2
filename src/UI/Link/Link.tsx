import React from 'react'

type linkProps = {
    link : string,
    name: string
};


export default function Link({link, name}: linkProps) {
  return (
    <a href={link}>{name}</a>
  )
}