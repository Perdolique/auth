import { createLogger } from '@auth/utils/logger'

const logger = createLogger('nuxt')

export function useLogger() {
  return logger
}
