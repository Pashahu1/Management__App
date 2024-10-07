import noProjectImage from '../assets/no-projects.png'
import Button from "./Button.jsx";
import Paragraph from "./Paragraph.jsx";
export default function NoProjectSelect({OnStartAddProject}) {
    return (
        <>
            <div className="mt-24 text-center w-2/3">
                <img src={noProjectImage} alt="An enpty task list" className="w-16 h-16 object-contain mx-auto" />
                <h2 className='text-xl font-bold text-stone-500 mt-4 my-4'>No Project Selected</h2>
                <Paragraph className='text-stone-400 mb-4'>Select a project or get started with new one</Paragraph>
                <p className='mt-8 '>
                    <Button onClick={OnStartAddProject}>Create new project</Button>
                </p>
            </div>
        </>
    )
}