import React from 'react'
import { Container } from './Example.style'
import Controls from './Controls'
import useInitial from '../hooks/useInitial'
import { PageState } from '../../../config/utils/Constants'
//import Loading from '../../../Components/Loading'
//import Page500 from '../../../Components/Page500'
import Header from './Header'
import { Capsule } from 'redity'

export default function Example () {
  const { pageState } = useInitial()

  return (
    <Container>
      <Capsule keyName='KEY_HEADER' index='asfasf'>
        {
          () => <Header />
        }
      </Capsule>
      {pageState === PageState.SUCCESS && <Controls />}
      {pageState === PageState.LOADING && <h1>Loading...</h1>}
      {pageState === PageState.ERROR && <h1>Error</h1>}
    </Container>
  )
}
