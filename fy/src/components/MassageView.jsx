import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
  
  import MessageComponent from "@/components/textview"
  
  export default function TabsDemo() {
    return (
      <Tabs defaultValue="private" className="max-w-3xl mx-auto">
        <div className="flex justify-center my-4  "> 
          <TabsList className="flex items-center border-2 py-4 grid-cols-2">
            <TabsTrigger value="private">Private</TabsTrigger>
            <TabsTrigger value="password">Group</TabsTrigger>
            <TabsTrigger value="All">All</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="private">
          <MessageComponent/>
        </TabsContent>
        <TabsContent value="password">
          <MessageComponent/>
        </TabsContent>
      </Tabs>
    )
  }
  