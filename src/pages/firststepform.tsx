import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { router } from '@/router';
import { firstStepSchema , type TfirstStepSchema } from '@/schemas/users';
import { useFormStore } from '@/stores/formstep';
import { zodResolver } from '@hookform/resolvers/zod';
import {  useForm } from 'react-hook-form';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const FirstStepForm = () => {


    const {formData,setFormData} = useFormStore()
    
 const form = useForm<TfirstStepSchema>({
    defaultValues: {
      name: "",
      email: "",
    },
    resolver: zodResolver(firstStepSchema),
  });

  
  const onSubmit = form.handleSubmit((data)=> {
    
    setFormData(data),
    router.push('secondstepform')
  })
  return (

    <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardAction>Card Action</CardAction>
  </CardHeader>
  <CardContent>
    
    <Form {...form}>
        <form>
      <FormField
  control={form.control}
  name="name"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Username</FormLabel>
      <FormControl>
        <Input placeholder="please enter your name" {...field} />
      </FormControl>
    </FormItem>
  )}
/>
        </form>
    </Form>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

  )
}
