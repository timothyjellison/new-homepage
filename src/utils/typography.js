import Typography from 'typography'
import theme from 'typography-theme-parnassus'

theme.overrideThemeStyles = () => ({
  a: {
    color: '#e8505b',
  },
})

export default new Typography(theme)
