import { Card, CardContent, CardFooter } from "@/components/ui/card";

type TestimonialProps = {
  quote: string;
  author: string;
};

export function Testimonial({ quote, author }: TestimonialProps) {
  return (
    <Card className="card">
      <CardContent className="pt-6">
        <p className="italic">&ldquo;{quote}&rdquo;</p>
      </CardContent>
      <CardFooter>
        <p className="font-semibold">- {author}</p>
      </CardFooter>
    </Card>
  );
}
