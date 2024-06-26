import PageContainer from "@/components/page-container"
import { Avatar, AvatarImage,AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Post } from "@/type"
import { Eye, MessageCircle } from "lucide-react"


export default function SinglePostPage() {
    const POST: Post = {
        id: 1,
        category: 'React',
        title: 'Understanding React Hooks',
        image: 'https://example.com/react-hooks.jpg',
        caption: 'A deep dive into the world of React Hooks.',
        date: '2023-06-01',
        minutesToRead: 8,
        author: 'John Doe',
        nbViews: 120,
        nbComments: 45,
        slug: 'understanding-react-hooks',
        content : 'Heloooosdfd'
    }
  return (
    <PageContainer>
        <div className="p-4">
        <div
            style={{backgroundImage: "url(/img/bg-01.jpg"}}
            className="rounded-lg aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
            >
                <div className="h-full w-full flex flex-col justify-center items-center">
                <div className="sm:max-w-xl max-w-xs bg-secondary/80 p-4 rounded-lg">
                <h1 className="font-bold text-3xl sm:text-5xl text-black dark:text-white">
                    {POST.title}
                </h1>
                
                </div>
                </div>
        </div>

        <div className="flex justify-between items-center p-3 mb-3">
            <div className="flex justify-center items-center gap-3">
                <Avatar>
                    <AvatarImage src="/img/avatar1.jpg" />
                    <AvatarFallback>{POST.author}</AvatarFallback>                     
                </Avatar>
                <div>
                    <p>{POST.author}</p>
                    <p className="text-slate-500 text-sm">
                        Post on {new Date(POST.date).toLocaleDateString()}
                    </p>
                </div>

            </div>
            
            <div className='flex gap-2'>
                    <div className='flex items-center gap-1'>
                        <MessageCircle size={24} />
                        <p>{POST.nbComments}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <Eye size={24}/>
                        <p>{POST.nbViews}</p>
                    </div>
                </div>
        </div>
        <Separator />

        <div className="mt-6" dangerouslySetInnerHTML={{
            __html : POST.content  as string,
        }} />

        </div>
    </PageContainer>
  )
}
