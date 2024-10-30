
import matter from "gray-matter"
import { BlockTypeSelect, ChangeCodeMirrorLanguage, CodeToggle, ConditionalContents, CreateLink, InsertCodeBlock, InsertFrontmatter, InsertImage, InsertSandpack, ListsToggle, ShowSandpackInfo} from '@mdxeditor/editor'
import { UndoRedo, BoldItalicUnderlineToggles } from '@mdxeditor/editor'
import SaveContent from "./SaveContent"

export default function toolbarContents({ contentMatter }: { contentMatter: matter.GrayMatterFile<string> }) {
    return (
        <>
            <UndoRedo />
            <BoldItalicUnderlineToggles />
            <BlockTypeSelect />
            <CodeToggle key="Code Toggle" />
            <CreateLink />
            <InsertFrontmatter />
            <InsertImage />
            <ListsToggle />
            <ConditionalContents
                options={[
                    { when: (editor) => editor?.editorType === 'codeblock', contents: () => <ChangeCodeMirrorLanguage /> },
                    { when: (editor) => editor?.editorType === 'sandpack', contents: () => <ShowSandpackInfo  /> },
                    {
                        fallback: () => (<>
                            <InsertCodeBlock />
                            <InsertSandpack />
                        </>)
                    }
                ]}
            />
            <SaveContent key={"Save Content"} contentMatter={contentMatter} />
        </>
    )
}
