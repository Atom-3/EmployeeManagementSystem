package com.hcl.Atom.Controller;

//public class EmpController {

//}
import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import com.hcl.Atom.Model.*;
import com.hcl.Atom.Service.*;



@RestController
@CrossOrigin(origins="http://localhost:4200")

@RequestMapping("/employee")
public class EmpController
{
@Autowired
private EmpServices service;

@PostMapping("/insert")
public HttpStatus insert(@RequestBody Employee emp)
{
try
{
service.save(emp);
return HttpStatus.CREATED;
}
catch(Exception e)
{
return HttpStatus.FOUND;
}
}



@PutMapping("/update")
public HttpStatus update(@RequestBody Employee emp)
{
//System.out.println(emp);
try
{
service.update(emp);
return HttpStatus.OK;
}
catch(Exception e)
{
return HttpStatus.NOT_FOUND;
}
}



@GetMapping("/findAll")
public List<Employee> findAll()
{
return service.findAll();
}



@GetMapping("/find/{id}")
public Object find(@PathVariable int id)
{
try
{
Employee emp=service.find(id);
return emp;
}
catch(Exception e)
{
return HttpStatus.NOT_FOUND;
}
}

@DeleteMapping("/delete/{id}")
public HttpStatus delete(@PathVariable int id)
{
try
{
service.delete(id);
return HttpStatus.OK;
}
catch(Exception e)
{
return HttpStatus.NOT_FOUND;
}
}



}
