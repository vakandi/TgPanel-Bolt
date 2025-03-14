import { createBrowserHistory } from 'history'

export const history = createBrowserHistory({
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
})
