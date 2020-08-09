import Typography from 'typography'
import theme from 'typography-theme-parnassus'

theme.overrideThemeStyles = () => ({
  a: {
    color: '#50a7e8',
  },
})

export default new Typography(theme)
