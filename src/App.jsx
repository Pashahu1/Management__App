import SideBar from "./components/SideBar.jsx";
import NoProjectSelect from "./components/NoProjectSelect.jsx";
import {useState} from "react";
import NewProject from "./components/NewProject.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
      selectedProjectId: undefined,
      projects: [],
  });

  function handleDeleteProject() {
      setProjectState(prevState => {
          return {
              ...prevState,
              selectedProjectId: undefined,
              projects: prevState.projects.filter((item) => item.id !== projectState.selectedProjectId)
          }
      })
  }


  function handleSelectProject(id) {
      setProjectState(prevState => {
          return {
              ...prevState,
              selectedProjectId: id,
          }
      })
  }

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

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject}/>;

  if(projectState.selectedProjectId === null) {
      content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if(projectState.selectedProjectId === undefined) {
      content = <NoProjectSelect OnStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
        <SideBar
            selectedProjectId={projectState.selectedProjectId}
            OnSelectProject={handleSelectProject}
            OnStartAddProject={handleStartAddProject}
            projects={projectState.projects}
        />
        { content }
    </main>
  );
}

export default App;
