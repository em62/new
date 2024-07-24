import { useState } from 'react'
import { Scene1 } from './scene1'
import { Scene2 } from './scene2'
import { Scene3 } from './scene3'
import { Scene4 } from './scene4'

export function Scenes() {
  const [sceneIndex, setSceneIndex] = useState(1)

  switch (sceneIndex) {
    case 1:
      return <Scene1 next={() => setSceneIndex(2)} />
    case 2:
      return <Scene2 next={() => setSceneIndex(3)} />
    case 3:
      return <Scene3 next={() => setSceneIndex(4)} />
    case 4:
      return <Scene4 />
    default:
      return
  }
}
