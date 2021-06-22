import React from 'react';
import { ImagemHeader } from '../styles/ComponentesStyles';

const Header = () =>{
  const urlImg1 = 'https://hyperpix.net/wp-content/uploads/2020/04/rick-and-morty-logo-font-free-download-856x484.jpg';

  const urlImg = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed60fa2e-e9d9-470c-b4a0-e4febab02a56/dbf11dc-60d1d4a5-15d5-4823-a0f8-99876e1cedfd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VkNjBmYTJlLWU5ZDktNDcwYy1iNGEwLWU0ZmViYWIwMmE1NlwvZGJmMTFkYy02MGQxZDRhNS0xNWQ1LTQ4MjMtYTBmOC05OTg3NmUxY2VkZmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.A9xQJwd_RuVFpEQ3_PjXsWszecKRhiHNb1jb-mx7wQs'
  return (
    <div>
      <ImagemHeader src={urlImg} alt="Imagem Header" />
    </div>
  )
}

export default Header;