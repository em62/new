import { useState } from 'react'
import { Scene1 } from './scene1'
import { Scene2 } from './scene2'
import { Scene3 } from './scene3'
import { Scene4 } from './scene4'
import { Scene0 } from './scene0'

export function Scenes() {
  const [scene, setScene] = useState(0)

  switch (scene) {
    case 0:
      return <Scene0 next={() => setScene(1)} />
    case 1:
      return <Scene1 next={() => setScene(2)} />
    case 2:
      return <Scene2 next={() => setScene(3)} />
    case 3:
      return <Scene3 next={() => setScene(4)} />
    case 4:
      return <Scene4 next={() => setScene(0)} />
    default:
      return
  }
}
