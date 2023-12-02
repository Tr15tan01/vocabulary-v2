import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
function HomePage() {
  return (
    <Container fluid style={{}} className="p-5 page">
      <Row lg>
        <Col lg className="mb-5">
          <h1 className="h1 mb-5">ვისწავლოთ ინგლისური სიტყვები</h1>
          <p>
            საიტზე VOCABULARY.GE შეგიძლიათ დაიწყოთ ინგლისური სიტყვების შესწავლა
            ონლაინ რეჟიმში, ამისათვის საჭიროა დააწვეთ ქვემოთ მოთავსებულ ღილაკს -
            "სწავლის დაწყება". გვერდის მეშვეობით თქვენ შეისწავლით 500 ძირითად
            ინგლისურ სიტყვას და გაზრდით თქვენს სიტყვათა მარაგს. გაუგებრობის
            შემთხვევაში შეგიძლიათ იხილოთ დეტალური ინსტრუქცია.
          </p>
          <hr />
          <Button variant="outline-success" className="w-100 btn-lg">
            <b>სწავლის დაწყება</b>
          </Button>
        </Col>
        <Col lg>
          <h1 className="h1 mb-5">რატომ უნდა ვისწავლოთ ინგლისური ენა</h1>
          <h3>1. ენის შესწავლა ანვითარებს გონებას</h3>
          <p>
            ადამიანების უმეტესობა უცხო ენის შესწავლას იწყებს სამსახურისთვის ან
            მოგზაურობისთვის, მაგრამ არის კიდევ ერთი მიზეზი, რომელზეც არავინ
            ამახვილებს ყურადღებას და რომელიც ავტომატურად მოუტანს სარგებელს ენის
            შემსწავლელ ადამიანებს. საქმე იმაშია, რომ ინგლისური ენის და საერთოდ
            უცხო ენის შესწავლა აძლიერებს გონების პოტენვიალს. გონებას, ისევე
            როგორც ნებისმიერ კუნთს სჭირდება ვარჯიში. ამიტომ უცხო ენის შესწავლა
            ძალიან კარგი სავარჯიშოა ნებისმიერი ადამიანისთვის.
          </p>
          <p>
            {" "}
            ორი ან მეტი ენის გამოყენება ყოველდღიურად აიძულებს ტვინს იმოძრაოს
            მისთვის ახლად დადგენილ წესებსა და ლაბირინთებში, რაც საკმაო
            ძალისხმევას მოითხოვს. მეორე ენის დადებითი თვისებების გამოვლენა
            იწყება ბავშვობის ასაკიდან და ღრმა სიბერემდე შეიძლება გაგრძელდეს.
            ორენოვანი ადამიანი, ვინაიდან ის ორ ენას ფლობს მუდმივად აკონტროლებს
            რომელ ენაზე საუბრობს და რომელი ენიდან უნდა ამოირჩიოს ამა თუ იმ
            სიტუაციისთვის შესაბამისი სიტყვა თუ ფრაზა.
          </p>

          <p>
            {" "}
            ეს მხოლოდ თავიდან არის რთული, დროთა განმავლობაში კი ქვეცნობიერის
            დონეზე გადადის და ამის კონტროლი ისეთივე მარტივია, როგორც მაგალითად
            სიარული და საუბარი ერთდროულად. ძალიან დიდი ხნის განმავლობაში
            საზოგადოებაში გაბატონებული იყო აზრი, რომ თუ ადამიანს რომელიმე ენის
            შესწავლა უნდოდა, ეს აუცილებლად ბავშვობაში უნდა გაეკეთებინა, რადგან
            ასაკის მატებასთან ერთად ტვინის ელასტიურობა და მასთან ერთად რაიმეს
            შესწავლის უნარიც მცირდებოდა. თუმცა ეს სტერეოტიპი უკვე დანგრეულია,
            რადგან არსებობს მრავალი ადამიანი, რომლებმაც ზრდასრულობის და
            მოხუცებულობის ასაკშიც კი ისწავლეს უცხო ენა.{" "}
          </p>

          <p>
            ამ სტერეოტიპის არსებობას მრავალი მიზეზი უწყობდა ხელს. მაგალითად ის,
            რომ ბავშვს უფრო მეტი დრო და ნაკლები საზრუნავი აქვს. ის ხალისით
            ითვისებს არა მხოლოდ ენას არამედ ყველაფერ ახალს. ზრდასრული ადამიანი
            კი, რომელსაც უამრავი საქმე და საზრუნავი აქვს და რომელიც საღამოს,
            სამსახურის შემდეგ მიდის ენის შემსწავლელ კურსებზე, რა თქმა უნდა უფრო
            რთულად მიიღებს ახალ ინფორმაციას. ზოგიერთმა კვლევებმა აჩვენა, რომ
            ადამიანები, რომლებიც საუბრობენ ორ ენაზე ბევრად უფრო გამძლენი არიან
            ალცჰეიმერის დაავადების მიმართ. საქმე იმაშია, რომ ორენოვანი ადამიანი
            დიდ დროს ატარებს ენებს ურთიერთჩანაცვლებაში და ეს ხელს უწყობს ტვინის
            მარცხენა სფეროში კავშირების წარმოქმნას და გამყარებას, რაც თავის
            მხრივ სხვადასხვა დაავადების წამოქმნას ეწინააღმდეგება.
          </p>

          <h3>2. კარიერული წარმატება</h3>
          <p>
            {" "}
            დღეს, ინგლისურ ენას დამსაქმებელთა უმეტესობა ითხოვს. რა თქმა უნდა
            ამას თავისი მიზეზი აქვს. საქმე იმაშია, რომ გლობალური ეკონომიკის
            პირობებში ინგლისური საერთაშორისო ენად იქცა და უმეტესობა სართაშორისო
            მოლაპარაკებების წარმოება ხდება ინგლისურ ენაზე.
          </p>
          <p>
            {" "}
            ასევე კომპანიებს ესაჭიროებათ თანამშრომლები, რომლებიც არა მხოლოდ
            მოლაპარაკებას შეძლებენ უცხოელ კლიენტებთან ან პარტნიორებთან, არამედ
            შეძლებენ ინფორმაციის მოძიებას ინტერნეტში, ამ მომენტისთვის ინტერნეტში
            დაახლოებით 4.5 მილიარდი ვებ გვერდია. თუ{" "}
            <a
              title="W3Techs"
              target="_blank"
              rel="noopener noreferrer"
              // style="text-decoration:underline; color:lightblue;"
              href="https://en.wikipedia.org/wiki/Languages_used_on_the_Internet"
            >
              W3Techs-ს
            </a>{" "}
            დავუჯერებთ, ტოპ 10 მილიონი ვებ გვერდის გაანალიზებისას 2020 წლის
            ნოემბერში დადგინდა, რომ მათ შორის 60.3% ინგლისურ ენაზეა დაწერილი. ეს
            ნიშნავს, რომ უფრო მეტი ონლაინ ინფორმაცია არის ხელმისაწვდომი იმ
            ადამიანებისთვის, რომლებსაც შეუძლიათ ინგლისურ ენაზე კითხვა. ასევე
            ინგლისური ენის ფლობა აუცილებელია პროფესიონალებისთვის, რომლებიც სხვა
            ქვეყნებში მიდიან დიდი ხნით სამუშაოდ თუ მივლინებით.
          </p>

          <p>
            {" "}
            ინგლისური ენა ასევე ძალიან გამოადგებათ თვითდასაქმებულ ადამიანებს,
            რომლებიც საქმიანობას ეწევიან ტურიზმის სფეროში ან საერთაშორისო
            მასშტაბით. კარიერული წინსვლის თვალსაზრისით პერსონალს დაწინაურების
            მეტი შანსი აქვს, თუ იგი ინგლისურად საუბრობს, ამას მოწმობს შედეგები,
            რომელიც{" "}
            <a
              title="EF FPI რეპორტი"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.ef.com/wwru/epi/"
            >
              EF FPI რეპორტმა
            </a>{" "}
            აჩვენა.
          </p>
          <p>
            {" "}
            თითქმის ყველა რეგიონში, და განსაკუთრებით ევროპაში, მენეჯერულ
            თანამდებობაზე მყოფი პირები ინგლისურად უკეთ საუბრობენ ვიდრე მათი
            დაქვემდებარებული პირები. ცოტა ხნის წინ, ინგლისური ენა იყო
            უპირატესობა, ეს ნიშნავდა, რომ ადამიანს არ უნდოდა ყოფილიყო სტანდარტულ
            ჩარჩოებში და პროფესიული განვითარების უფრო მაღალ საფეხურზე მიიწევდა.
            დღესდღეისობით, უმეტესობა სფეროში? ნებისმიერი მენეჯერი თუ ინტერვიუერი
            მოელის თქვენგან კარგ, გამართულ ინგლისურს…{" "}
          </p>

          <h3>3. მეხსიერების გაუმჯობესება</h3>

          <p>
            ახალი ენის შესწავლა ძალიან კარგია მეხსიერების გაუმჯობესებისთვის.
            Როდესაც ვსწავლობთ ენას გვიწევს ათასობით ახალი სიტყვის დამახსოვრება,
            თანაც ყველა ენაში ყოველ სიტყვას რამოდენიმე მნიშვნელობა აქვს.
          </p>
          <p>
            {" "}
            მაშასადამე გვიწევს მრავალი სიტყვის დამახსოვრება, სხვადასხვა
            ,მნიშვნელობით და კონტექსტით, ეს ძალიან დიდ ძალისხმევას მოითხოვს
            ხანგრძლივი პერიოდის განმავლობაში, რაც საბოლოო ჯამში მეხსიერებას
            ძალიან კარგ ფორმაში ინარჩუნებს. ყველა ენას თავისი სპეციფიკა აქვს,
            განსხვავებული გრამატიკა და სიტყვათა წყობა. მაგალითად, ფრანგულ ენაში
            არის დაახლოებით 135000 სიტყვა, რუსულში 150000, ინგლისურში ენაში
            ოქსფორდის ლექსიკონის თანახმად, არის 171,476 სიტყვა, რომელიც
            გამოიყენება თანამედროვე სასაუბრო და ლიტერატურულ ინგლისურში. დიახ, ეს
            უზარმაზარი რიცხვია, მაგრამ იმისთვის, რომ ინგლისურად გამართულად
            ვისაუბროთ, ვწეროთ და ვიკითხოთ აუცილებელი არ არის ყველა სიტყვის
            ზედმიწევნით დამახსოვრება.
          </p>

          <p>
            {" "}
            დადგენილია, რომ ჩვეულებრივი მოზრდილი ადამიანი, რომლისთვისაც
            ინგლისური მშობლიური ენაა, ყოველდღიურ ცხოვრებაში იყენებს 20000-დან
            35000-მდე სიტყვას. რა თქმა უნდა ესაც უზარმაზარი ინფორმაციაა და მისი
            დამახსოვრება და გამოყენება ძალიან სასარგებლოა მეხსიერების
            გავარჯიშებისთვის.{" "}
          </p>

          <h3>4. მულტიტასკინგი</h3>
          <p>
            მულტიტასკინგი, ეს არის ერთდროულად რამოდენიმე საქმის კეთება. ამის
            შესახებ ყველას თავისი აზრი გააჩნია. Ზოგის აზრით ეს ძალიან საზიანო
            შეიძლება იყოს. Ზოგი კი ამტკიცებს, რომ ეს პირიქით აუმჯობესებს
            გონებას. თუმცა რასაც ყველა ეთანხმება არის ის, რომ მულტიტასკინგის
            გარეშე ცხოვრება შეუძლებელია.
          </p>

          <p>
            {" "}
            არ არის აუცილებელი იყოთ ოფისის მენეჯერი, კონვეირის ოპერატორი,
            დისპეჩერი, რეჟისორი ან საჰაერო მოძრაობის კონტროლიორი, ერთდროულად
            მრავალი საქმის კეთება ყოველდღიურ ცხოვრებაშიც გვიწევს, მაგალითად
            ვმართავთ ავტომობილს და ვსაუბრობთ, ან ვამზადებთ საკვებს და ვაქცევთ
            ყურადღებას ბავშვს. ამის მაგალითები უამრავია. უცხო ენის შესწავლა
            დადებით გავლენას ახდენს ჩვენი მულტიტასკინგის შესაძლებლობებზე და
            მაშასადამე გვიადვილებს პროფესიულ საქმიანობას და ყოველდღიურ
            ცხოვრებას.{" "}
          </p>

          <h3>5. თავდაჯერებულობა</h3>
          <p>
            ერთდროულად ორი ან მეტი ენის ფლობა ადამიანს მატებს თავდაჯერებულობას.
            ეს თვისება კი რა თქმა უნდა ბევრ ცხოვრებისეულ სიტუაციაში
            გამოგვადგება. მაგალითად, თავდაჯერებული ადამიანი მეტად მიმზიდველია,
            მასთან უფრო მეტ ადამიანს სურს ურთიერთობა, შესაბამისად უფრო
            პოპულარულია და წარმატებული. იგი.თავის შესაძლებლობებს უკეთ წარმოაჩენს
            და უკეთ ახდენს საკუთარი თავის რეალიზაციას.{" "}
          </p>

          <h3>6. მოგზაურობა</h3>
          <p>
            {" "}
            ინგლისური ენის ცოდნა ძალიან გამოსადეგია მოგზაურობის დროსაც.
            მნიშვნელობა არ აქვს მოგზაურობის მიზეზს, ეს იქნება მივლინება,
            ტურისტული მოგზაურობა თუ სტუმრად ჩასვლა რომელიმე ქვეყანაში, ინგლისური
            ენის ცოდნა მრავალ სიტუაციაში გამოგადგებათ. მაგალითად,. სასტუმროს
            დაჯავშნა. რეზერვაცია ერთ-ერთი მნიშვნელოვანი საფეხურია მოგზაურობის
            დროს, რომელიც ნებისმიერ ქვეყანაში უმეტესწილად ინგლისურ ენაზე ხდება
            და სასაუბრო ენის ცოდნა დაგეხმარებათ მის სწრაფად და მარტივად
            ჩატარებაში.. ეს ერთ-ერთი პირველი საფეხურია და მის წარმატებით
            შესრულებაზე ძალიან ბევრი რამ არის დამოკიდებული.
          </p>
          <p>
            {" "}
            ასევე თქვენ არ ხართ დამოკიდებული გიდზე ან სხვა მოგზაურებზე.
            შეგიძლიათ დამოუკიდებლად მიიღოთ გადაწყვეტილებები, თუ როდის სად
            წახვიდეთ და რა გააკეთოთ. ასევე შეხვდეთ და გაიცნოთ ახალი ადამიანები,
            ახალი კულტურა. ჩვენი სურვილების და მოთხოვნების გამოხატვა ასევე
            მნიშვნელოვანია მოგზაურობის დროს. ვიქნებით სასტუმროში თუ რესტორანში,
            ბევრად მარტივია მომსახურე პერსონალი მივახვედროთ რა გვინდა თუ ვფლობთ
            სასაუბრო ენას. ასევე მეტად თავდაჯერებული ვიქნებით მოგზაურობისას.
            ინგლისური ენა ყველაზე მეტად არის გავრცელებული მთელ მსოფლიოში.
            ინგლისურად დაახლოებით 1.5 მილიარდი ადამიანი საუბრობს. ეს მსოფლიოს
            მოსახლეობის 20%-ია. გთავაზობთ ქვეყნების არასრულ ჩამონათვალს, სადაც
            ინგლისურად საუბრობენ:
          </p>

          <ul>
            <li>აშშ</li>
            <li>დიდი ბრიტანეთი</li>
            <li>ინდოეთი</li>
            <li>ავსტრალია</li>
            <li>ახალი ზელანდია</li>
            <li>კანადა</li>
            <li>ფილიპინები</li>
            <li>ირლანდია</li>
            <li>იამაიკა</li>
            <li>ფიჯი</li>
            <li>პაკისტანი</li>
            <li>მალაიზია</li>
            <li>სამხრეთ აფრიკა</li>
            <li>ეთიოპია</li>
            <li>შრი ლანკა</li>
            <li>კენია</li>
          </ul>

          <h3>7. გართობა</h3>
          <p>
            ყველას უყვარს ფილმების ყურება. დღეს კინო ინდუსტრიაში ამერიკული
            ჰოლივუდური ფილმები დომინირებს. ესაც არის ერთ-ერთი მიზეზი ინგლისური
            ენის პოპულარიზაციისა და გლობალიზაციის. თუ ფლობთ ინგლისურ ენას
            შეგიძლიათ ნახოთ ნებისმიერი ჰოლივუდის ფილმი მანამ, სანამ სხვა ენაზე
            გაახმოვანებენ. ასევე ლიტერატურის მოყვარულებიც დიდ სარგებელს ნახავენ
            ინგლისური ენის შესწავლით. ნებისმიერი წიგნი უმეტესწილად პირველ რიგში
            ინგლისურ ენაზე ითარგმნება.
          </p>

          <h3>* * *</h3>
          <p>
            მაშასადამე, ნებისმიერი ენის შესწავლა მრავალ დადებით ეფექტს შეიცავს.
            ინგლისური კი უბრალოდ ყველაზე მეტად გავრცელეუბული ენაა მსოფლიოში და
            მისი ფლობით ყველაზე მეტ ადამიანთან გექნებათ ურთიერთობის საშუალება.
            ინგლისური ენის შესწავლა არა მხოლოდ კარიერული წარმატების საწინდარია,
            არამედ აადვილებს მოგზაურობას, გვმატებს თავდაჯერებულობას, ანვითარებს
            გონებას, გვხდის უფრო მიმზიდველს და უბრალოდ გვაძლევს საშუალებას ვიყოთ
            უფრო ეფექტური კომუნიკატორი. მაშასადამე დროის, ენერგიის და ფინანსების
            ჩადება მეორე ენის, და განსაკუთრებით ინგლისური ენის შესწავლაში არის
            ძალიან კარგი ინვესტიცია.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
