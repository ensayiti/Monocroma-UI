import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-dot" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>Monocroma</span>
    </>
  ),
  project: {
    link: 'https://github.com/ensayiti/Monocroma-UI',
  },
  chat: {
    link: 'https://twitter.com/ensayiti_',
  },
  docsRepositoryBase: 'https://github.com/ensayiti/Monocroma-UI',
  footer: {
    text: 'Monocroma',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Monocroma'
    }
  }
}

export default config