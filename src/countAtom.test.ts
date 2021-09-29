import { renderHook, act } from '@testing-library/react-hooks'
import { useAtom } from 'jotai'
import { countAtom } from './countAtom'

test('should increment counter', () => {
  const { result } = renderHook(() => useAtom(countAtom))

  act(() => {
    result.current[1]('INCREASE')
  })

  expect(result.current[0]).toBe(1)
})
