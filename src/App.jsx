import SideBar from "./components/SideBar.jsx";
import NoProjectSelect from "./components/NoProjectSelect.jsx";
import {useState} from "react";
import NewProject from "./components/NewProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
      selectedProjectId: undefined,
      projects: [],
  });

  function handleStartAddProject() {
      setProjectState(prevState => {
          return {
              ...prevState,
              selectedProjectId: null,
          }
      })
  }

  function handleCancelAddProject() {
      setProjectState(prevState => {
          return {
              ...prevState,
              selectedProjectId: undefined,
          }
      })
  }

  function handleAddProject(projectData) {
      setProjectState(prevState => {
          const newProject = {
              ...projectData,
              id: Math.random()
          };

          return {
              ...prevState,
              selectedProjectId: undefined,
              projects: [...prevState.projects, newProject],
          }
      });
  }

  let content;

  if(projectState.selectedProjectId === null) {
      content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if(projectState.selectedProjectId === undefined) {
      content = <NoProjectSelect OnStartAddProject={handleStartAddProject} />
  }


  return (
    <main className="h-screen my-8 flex gap-8">
        <SideBar OnStartAddProject={handleStartAddProject} projects={projectState.projects} />
        { content }
    </main>
  );
}

export default App;
