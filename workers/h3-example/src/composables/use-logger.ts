import { createLogger } from '@auth/utils/logger'

const logger = createLogger('h3-example')

export function useLogger() {
  return logger
}
