import ClickCounter from './components/ClickCounter'
import EnhancedBlog from './components/hocExample/Blog'
import EnhancedComments from './components/hocExample/CommentsCount'
import EnhancedLikes from './components/hocExample/LikesCount'
import EnhancedLoves from './components/hocExample/Love'
import HoverCounter from './components/HoverCounter'
import ClickCounterRenderProps from './components/RenderProps/ClickCounterRenderProps'
import HoverCounterRenderProps from './components/RenderProps/HoverCounterRenderProps'
import Counter from './components/RenderProps/Counter'
import ThemeContext from './contexts/themeContext';
import React from 'react'
import Section from './components/Section'

// function App() {
class App extends React.Component{
  state = {
    theme: 'light',

    switchTheme: () => {
        this.setState(({ theme }) => {
            if (theme === 'dark') {
                return {
                    theme: 'light',
                };
            }
            return {
                theme: 'dark',
            };
        });
    },
};
render(){
  return (
    <div>
      Hello World!
      <ClickCounter/>
      <HoverCounter/>
      <EnhancedLikes/>
      <EnhancedComments/>
      <EnhancedLoves/>
      <EnhancedBlog/>

      {/* Render Props */}
      <Counter>
                {(counter, incrementCount) => (
                    <HoverCounterRenderProps count={counter} incrementCount={incrementCount} />
                )}
            </Counter>
            <Counter>
                {(counter, incrementCount) => (
                    <ClickCounterRenderProps count={counter} incrementCount={incrementCount} />
                )}
            </Counter>
            <ThemeContext.Provider value={this.state}>
                    <Section />
                </ThemeContext.Provider>

    </div>
  );
}
}


export default App;
